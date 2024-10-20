import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
    await cloudinary.config({
        cloud_name: "dvp2unmyn",
        api_key: "732674735872728",
        api_secret: "sIUVuLHxYeN6oztpBR0I6jYuqtk"
    })
}

export default connectCloudinary;