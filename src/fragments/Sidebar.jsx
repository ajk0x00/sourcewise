import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import IconButton from '../components/IconButton';
import UploadedDoc from '../components/UploadedDoc';
import { GrAdd } from 'react-icons/gr';
import { SlCloudUpload } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="h-full w-fit flex flex-col bg-white rounded-3xl">
      <div className="border-b border-slate-100 p-5">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Source Wise</h2>
        </div>
        <div className="flex items-center space-x-2">
          <PrimaryButton text="New chat" icon={GrAdd}/>
          <IconButton icon={SlCloudUpload} />
        </div>
      </div>
      <div>
        <div className="border border-slate-100 flex justify-between items-center px-5 py-3">
          <h3 className="text-xs font-medium text-neutral-600">Uploaded documents</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm">Clear All</button>
        </div>
        <div className='max-h-1/2 flex-col ps-2 py-2 overflow-y-auto no-scrollbar'>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
          <UploadedDoc text="Hypothalamus.pdf" onDelete={() => {}}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;