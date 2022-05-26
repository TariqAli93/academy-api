import Settings from '../models/settings.model.js';

export const GetAllSettings = (req, res) => {
    Settings.findAllSettings((err, settings) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Settings retrieved successfully',
                settings: settings,
            });
        }
    });
}