export default function handler(req, res) {
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true" ? true : false;
  
    res.status(200).json({ isMaintenanceMode });
  }
  