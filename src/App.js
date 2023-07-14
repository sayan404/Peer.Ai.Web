import background from './asset/bkgvdo.mp4'
import logo from './asset/logo.png'
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material-next/Button';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const theme = useTheme();

  return (
    <div className="maincontainer">
      <div className='videoSection'>
        <video className='videoTag' autoPlay loop muted>
          <source src={background} type='video/mp4' />
        </video>
      </div>
      <Box
        sx={{
          width: '60%',
          maxWidth: 650,
          height: '40%',
          maxHeight: 400,
          left: '20%',
          top: '270px',
          transition: '0.5s ease',
          position: 'absolute',
          borderRadius: '10px',
          '&:hover': {
            transition: '0.5s ease'
          },
          [theme.breakpoints.down('sm')]: {
            width: '90%', // Adjust the width for smaller screens
            left: '5vw',
          },
        }}
      >
        <p className='taglines'>Peer.Ai </p>
        <p className='taglinestwo'>Enhances Chrome with Voice Navigation, Smart Search, Q&A, and Page Summaries</p>
        <a href="https://github.com/sayan404/Peer.Ai" rel="noopener"><Button variant="contained" color="success" endIcon={<SendIcon />}>GitHub</Button></a>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: 370,
          height: '100%',
          maxHeight: 230,
          right: '10vw',
          top: '60px',
          transition: '0.5s ease',
          position: 'absolute',
          borderRadius: '10px',
          '&:hover': {
            transition: '0.5s ease'
          },
          [theme.breakpoints.down('sm')]: {
            width: '90%', // Adjust the width for smaller screens
            right: '5vw',
          },
        }}
      >
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/txWAGhqS834`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Box>

      <footer>
        <div className='footer'>
          <div className='img'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='seperator'></div>
          <div className='socialHandels'>
            <a href="https://github.com/sayan404/Peer.Ai" rel="noopener">
              <GitHubIcon
                sx={{
                  fontSize: 50,
                  padding: '15px 8px',
                  padding: '10px',
                  '&:hover': {
                    color: '#030204',
                    transition: '0.5s ease',
                    cursor: 'pointer',
                  },
                }}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

App.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default App;
