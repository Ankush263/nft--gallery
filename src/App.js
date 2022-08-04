import './App.css';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center py-8 gap-y-3">
      <div className='box flex flex-col w-full justify-center items-center gap-y-2'>
        <input className='w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50' type="text" name="" id="" placeholder='Add your wallet Address' />
        <input className='w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50' type="text" name="" id="" placeholder='Add collection Address' />
        <label htmlFor="checkbox">
          <input type="checkbox" name="" id="" />
        </label>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"}>Let's Go</button>
      </div>
    </div>
  );
}

export default App;
