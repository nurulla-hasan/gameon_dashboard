

const PageContainer = ({children}) => {
    return (
        <div className='space-y-4 text-[#676767] p-5 h-[calc(100vh-100px)] overflow-auto scrl-hide'>
            {children}
        </div>
    );
};

export default PageContainer;