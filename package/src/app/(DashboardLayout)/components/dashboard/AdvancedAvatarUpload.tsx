import React, { useState, useRef } from 'react';
import { 
  Box, 
  Avatar, 
  IconButton, 
  Typography, 
  Stack, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import { Icon } from '@iconify/react';

interface AdvancedAvatarUploadProps {
  size?: number;
  onImageChange?: (imageUrl: string) => void;
}

const AdvancedAvatarUpload: React.FC<AdvancedAvatarUploadProps> = ({ 
  size = 96, 
  onImageChange 
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
        setIsDialogOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };



  const handleConfirmUpload = () => {
    setImageUrl(previewUrl);
    onImageChange?.(previewUrl);
    setIsDialogOpen(false);
    setPreviewUrl('');
  };

  const handleCancelUpload = () => {
    setIsDialogOpen(false);
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Stack alignItems="center" spacing={1}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={imageUrl}
              sx={{
                width: size,
                height: size,
                border: '3px solid #d0d7de',
                bgcolor: imageUrl ? 'transparent' : '#f6f8fa',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                }
              }}
              onClick={handleClick}
            >
              {!imageUrl && (
                <Icon icon="mdi:account" width={size * 0.4} color="#64748B" />
              )}
            </Avatar>
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                bgcolor: 'primary.main',
                color: 'white',
                width: 32,
                height: 32,
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
              onClick={handleClick}
            >
              <Icon icon="mdi:camera" width={16} />
            </IconButton>
          </Box>
          

          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </Stack>
      </Box>

      {/* 预览对话框 */}
      <Dialog 
        open={isDialogOpen} 
        onClose={handleCancelUpload}
        maxWidth="sm"
        fullWidth
      >
                 <DialogTitle>Preview Avatar</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <Avatar
              src={previewUrl}
              sx={{
                width: 200,
                height: 200,
                border: '3px solid #d0d7de',
              }}
            />
          </Box>
                     <Typography variant="body2" color="text.secondary" align="center">
             Confirm to use this image as your avatar?
           </Typography>
        </DialogContent>
        <DialogActions>
                     <Button onClick={handleCancelUpload} color="inherit">
             Cancel
           </Button>
           <Button onClick={handleConfirmUpload} variant="contained">
             Confirm
           </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdvancedAvatarUpload;
