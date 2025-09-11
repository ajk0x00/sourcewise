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

const Sidebar = () => {

  const [uploadedDocs, setUploadedDocs] = useState([])

  const handleDocUpload = e => {
    const file = e.target.files[0];
    uploadFile(file);
    setUploadedDocs([...uploadedDocs, file.name])
  }

  const profilePic = () => (
    <div className='w-7 h-7 rounded-full'>
      <img src={girlProfile} alt="profile pic" className='w-full h-full object-cover rounded-full' />
    </div>
  )

  return (
    <div className="h-full w-fit flex flex-col bg-white rounded-3xl">
      <div className='h-fit flex-grow-0 p-4'>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Source Wise</h2>
        </div>
        <div className="flex items-center space-x-2">
          <PrimaryButton text="New chat" icon={GrAdd}/>
          <DocUploadButton icon={SlCloudUpload} onChange={handleDocUpload}/>
        </div>
      </div>
      <div className='relative h-5/14 flex-grow-1 w-full ps-4'>
        <div className="h-fit flex justify-between items-center py-3 pe-4">
            <h3 className="text-xs font-medium text-neutral-600">Uploaded documents</h3>
            <button className={`${uploadedDocs.length > 0 ? 'text-blue-600 hover:text-blue-800' : 'text-neutral-400'} text-xs`} disabled={uploadedDocs.length == 0}>Clear All</button>
        </div>
        <div className='max-h-4/5 flex-col py-2 overflow-y-auto no-scrollbar'>
          {uploadedDocs.map((doc, index) => (
            <UploadedDoc key={index} text={doc} onDelete={() => {}}/>
          ))}
        </div>
        <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent'></div>
      </div>
      <div className='relative h-5/14 flex-grow-1 w-full ps-4'>
        <div className="h-fit flex justify-between items-center py-3 pe-4">
          <h3 className="text-xs font-medium text-neutral-600">Your conversations</h3>
          <button className="text-blue-600 hover:text-blue-800 text-xs">Clear All</button>
        </div>
        <div className='flex-col py-2 max-h-4/5 overflow-y-auto no-scrollbar'>
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
        <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent'></div>
      </div>
      <div className='h-fit flex-grow-0 p-4'>
        <SecondaryButton text="Lazy Mango" icon={profilePic}/>
      </div>
    </div>
  );
};

export default Sidebar;