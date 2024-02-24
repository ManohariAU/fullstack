
import { Typography, Card, CardContent } from '@mui/material';

const VisionMission = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Vision & Mission</Typography>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Vision</Typography>
                    <Typography variant="body1">
                        Our vision statement goes here. This is a brief statement describing the desired future state or long-term goal of the organization.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Mission</Typography>
                    <Typography variant="body1">
                        Our mission statement goes here. This is a statement outlining the purpose, values, and core objectives of the organization.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default VisionMission;
