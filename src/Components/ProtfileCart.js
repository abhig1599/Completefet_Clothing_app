import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProfileCard = () => {
    return (
        <div className="bg-gray-200 flex justify-center items-center min-h-screen">
            <div className="card w-80 h-80 bg-white rounded-xl relative transition-transform overflow-hidden">
                <div className="profile-pic absolute w-full h-full top-0 left-0 rounded-xl z-10 border-4 border-white overflow-hidden transition-transform">
                    <img src="img/img (3).png" alt="Profile Image" className="w-full h-full object-cover transition-transform" />
                </div>
                <div className="details absolute left-4 right-4 bottom-4 z-20 top-4 bg-green-500 text-white rounded-2xl shadow-md overflow-hidden transition-all">
                    <div className="content absolute top-0 left-0 opacity-0 transition-all delay-500">
                        <h2 className="ml-4 text-2xl font-bold">RAYEN</h2>
                        <p className="tag ml-4 text-xs font-light">WEB DESIGNER</p>
                        <p className="about text-sm mt-4 mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic </p>
                    </div>
                    <div className="buttons absolute bottom-4 w-full px-4 flex justify-between items-center">
                        <div className="social flex gap-4">
                            {/* <FontAwesomeIcon icon={faInstagram} className="text-white cursor-pointer hover:text-green-300" />
                            <FontAwesomeIcon icon={faTwitter} className="text-white cursor-pointer hover:text-green-300" />
                            <FontAwesomeIcon icon={faGithub} className="text-white cursor-pointer hover:text-green-300" /> */}
                        </div>
                        <a href="#" className="link text-green-500 hover:bg-green-300 hover:text-white py-1 px-2 rounded-md text-sm">project 
                        {/* <FontAwesomeIcon icon={faUpRightFromSquare} /> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
