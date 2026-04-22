// Inside your FriendDetails component...
<div className="bg-white p-6 shadow-md rounded-xl border border-gray-100">
  <h3 className="font-bold text-gray-800 mb-6">Quick Check-In</h3>
  <div className="grid grid-cols-3 gap-4">
    <button 
      onClick={() => handleAction("Call")} 
      className="flex flex-col items-center border border-gray-100 p-5 rounded-2xl hover:bg-gray-50 transition shadow-sm"
    >
      <img src="/assets/call.png" alt="Call" className="w-12 h-12 mb-2" />
      <span className="text-sm font-semibold text-gray-700">Call</span>
    </button>
    
    <button 
      onClick={() => handleAction("Text")} 
      className="flex flex-col items-center border border-gray-100 p-5 rounded-2xl hover:bg-gray-50 transition shadow-sm"
    >
      <img src="/assets/text.png" alt="Text" className="w-12 h-12 mb-2" />
      <span className="text-sm font-semibold text-gray-700">Text</span>
    </button>
    
    <button 
      onClick={() => handleAction("Video")} 
      className="flex flex-col items-center border border-gray-100 p-5 rounded-2xl hover:bg-gray-50 transition shadow-sm"
    >
      <img src="/assets/video.png" alt="Video" className="w-12 h-12 mb-2" />
      <span className="text-sm font-semibold text-gray-700">Video</span>
    </button>
  </div>
</div>
export default FriendDetails;