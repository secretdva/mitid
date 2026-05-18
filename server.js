const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('.'));

// Store current QR data in memory
let currentQR = {
    qrData: null,
    timestamp: null,
    active: false
};

// Client endpoint - polls for QR
app.get('/api/public/current-qr', (req, res) => {
    const isFresh = currentQR.timestamp && (Date.now() - currentQR.timestamp < 1500);
    
    res.json({
        qrData: (isFresh && currentQR.active) ? currentQR.qrData : null,
        timestamp: currentQR.timestamp
    });
});

// Admin endpoint - receives QR from admin panel
app.post('/api/admin/update-qr', (req, res) => {
    currentQR = {
        qrData: req.body.qrData || null,
        timestamp: req.body.timestamp || Date.now(),
        active: req.body.active || false
    };
    
    res.json({ success: true });
});

// SMS settings endpoint
app.get('/api/public/settings/show-sms', (req, res) => {
    res.json({ showSMS: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});