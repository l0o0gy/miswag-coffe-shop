import React from 'react';
import { useData } from '../assets/contacts/store';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box } from '@mui/material';  
import "react-lazy-load-image-component/src/effects/blur.css";

function CoffeeImage({ id }) {
    const items = useData();
    const product = items.find(item => item.id === id);

    if (!product) return null;

    return (
        // <Box sx={{ height: { xs: '100px', md: '300px' }, maxWidth: '500px', overflow: 'hidden', borderRadius: 2 }}>
            <LazyLoadImage
                loading='lazy'
                src={product.img}
                alt={product.title}
                style={{
                     width: '100%',
                    height:'100%', objectFit: 'cover' }}
                effect='blur'
            />
        // </Box>
    );
}

export default CoffeeImage;
