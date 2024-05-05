import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {product.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Stack >
        {product.colors}
        </Stack>
        <Popup trigger={<button className="see-idea"> See more </button>} modal>   
       <div className="modal-content px-5 py-3">
        <span className='close'>X</span>
        <div className="title text-center">
          <h4>Details Idea</h4>
        </div>
        <div className="content mt-3">
          <div className="section">
            <label htmlFor="idea"><b>Idea title</b></label>
            <p>GreenEats - Sustainable Meal Delivery Service</p>
          </div>
          <div className="desc">
            <label htmlFor="desc"><b>Description</b></label>
            <p>GreenEats is a meal delivery service that focuses on providing sustainable, locally sourced, and organic meals to customers. Our mission is to promote healthy eating while minimizing environmental impact by partnering with local farmers and using eco-friendly packaging</p>
          </div>
          <div className="business">
          <label htmlFor="desc"><b>Business Plan</b></label>
            <ul>
              <li>
                <span>Executive Summary:* GreenEats aims to revolutionize the meal delivery industry by offering sustainable and healthy meal options.
</span>
              </li>
              <li>
                <span>Market Analysis:* We target health-conscious individuals who prioritize sustainability and are willing to pay premium prices for quality meals.
</span>
              </li>
              <li>
                <span>
                Operations Plan:* GreenEats partners with local farmers to source fresh ingredients and uses biodegradable packaging for meal delivery.

                </span>
              </li>
              <li>
                <span>
                Marketing and Sales Plan:* Our marketing strategy focuses on social media, influencer partnerships, and targeted advertising to reach our target audience.

                </span>
              </li>
              <li>
                <span>
                Financial Plan:* We project steady growth in revenue as we expand our customer base and streamline operations.

                </span>
              </li>
              <li>
                <span>
                Management Team:* The GreenEats team consists of experienced professionals in the food industry with a passion for sustainability.
                </span>
              </li>
            </ul>
          </div>
          <div className="modal-btns">
            <a href="#" className='accept'>Accept</a>
            <a href="#" className='reject'>Reject</a>
          </div>
        </div>
       </div>
          </Popup>
      </Stack>
     
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
