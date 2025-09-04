import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import DocUploadButton from '../components/DocUploadButton';
import UploadedDoc from '../components/UploadedDoc';
import PreviousChat from '../components/PreviousChat';
import SecondaryButton from '../components/SecondaryButton';
import girlProfile from '../assets/girlProfile.png';
import { uploadFile } from '../services/uploadDoc'
import { GrAdd } from 'react-icons/gr';
import { SlCloudUpload } from "react-icons/sl";
import { RiSettings3Line } from "react-icons/ri";

const Sidebar = () => {

  const [uploadedDocs, setUploadedDocs] = useState([])

  const handleDocUpload = e => {
    const file = e.target.files[0];
    uploadFile(file);
    setUploadedDocs([...uploadedDocs, file.name])
  }

  const settingsIcon = () => (
    <div className='flex items-center justify-center p-2 w-fit h-fit rounded-full bg-zinc-100'>
      <RiSettings3Line />
    </div>
  )

  const profilePic = () => (
    <div className='w-7 h-7 rounded-full'>
      <img src={girlProfile} alt="profile pic" className='w-full h-full object-cover rounded-full' />
    </div>
  )

  return (
    <div className="h-full w-fit flex flex-col bg-white rounded-3xl">
      <div className="border-b border-slate-100 p-5">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Source Wise</h2>
        </div>
        <div className="flex items-center space-x-2">
          <PrimaryButton text="New chat" icon={GrAdd}/>
          <DocUploadButton icon={SlCloudUpload} onChange={handleDocUpload}/>
        </div>
      </div>
      <div className='flex-col w-full h-fit'>
        <div>
          <div className="border border-slate-100 flex justify-between items-center px-5 py-3">
            <h3 className="text-xs font-medium text-neutral-600">Uploaded documents</h3>
            <button className={`${uploadedDocs.length > 0 ? 'text-blue-600 hover:text-blue-800' : 'text-neutral-400'} text-xs`} disabled={uploadedDocs.length == 0}>Clear All</button>
          </div>
          <div className='h-35 flex-col ps-2 py-2 overflow-y-auto no-scrollbar'>
            {uploadedDocs.map((doc, index) => (
              <UploadedDoc key={index} text={doc} onDelete={() => {}}/>
            ))}
          </div>
        </div>
        <div>
          <div className="border border-slate-100 flex justify-between items-center px-5 py-3">
            <h3 className="text-xs font-medium text-neutral-600">Your conversations</h3>
            <button className="text-blue-600 hover:text-blue-800 text-xs">Clear All</button>
          </div>
          <div className='h-35 flex-col ps-2 py-2 overflow-y-auto no-scrollbar'>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
            <PreviousChat text="What is Hypothalamus?" onDelete={() => {}}/>
          </div>
        </div>
      </div>
      <div className='h-full flex gap-2 flex-col p-1'>
        <SecondaryButton text="Settings" icon={settingsIcon}/>
        <SecondaryButton text="Lazy Mango" icon={profilePic}/>
      </div>
    </div>
  );
};

export default Sidebar;