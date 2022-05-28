import React from 'react';

const ProfileInfo = ({ profile, setUpdatingProfile }) => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body font-bold text-emerald-600">
                <p>Education: <span className="bg-yellow-300 text-slate-800"> {profile?.education ? profile.education : "N/A"}</span></p>
                <p>Address:  <span className="bg-yellow-300 text-slate-800"> {profile?.address ? profile.address : "N/A"}</span></p>
                <p>LinkedIn:  <span className="bg-yellow-300 text-slate-800"> {profile?.linkedin ? profile.linkedin : "N/A"}</span></p>
                <p>Phone:  <span className="bg-yellow-300 text-slate-800"> {profile?.phone ? profile?.phone : "N/A"}</span></p>
                <div className="card-actions justify-center">
                    <label onClick={setUpdatingProfile(profile)} htmlFor="profile-modal" className="btn modal-button btn-primary">Update Profile</label>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
