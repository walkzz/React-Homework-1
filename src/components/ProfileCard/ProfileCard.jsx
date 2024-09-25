import ProfileDescription from "./ProfileComponents/ProfileDescription";
import ProfileName from "./ProfileComponents/ProfileName";
import ProfilePicture from "./ProfileComponents/ProfilePicture";

const ProfileCard = () => {
    const profileStyle = {
        border: '1px solid #ccc', 
        padding: '20px',
        margin: '20px',
        borderRadius: '10px', 
        width: '300px',
        height: '300px',
        backgroundColor: "white",
        color: 'black'
    }
    return(
        <div style={profileStyle}>
            <ProfilePicture />
            <ProfileName />
            <ProfileDescription />
        </div>
    );
}
export default ProfileCard