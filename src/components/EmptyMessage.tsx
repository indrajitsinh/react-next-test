
interface IProps {
  message: string;
}
const EmptyMessage: React.FC<IProps> = ({ message }) => {
  return (
    <div className='mt-14 flex items-center justify-center'>
      <div role='status'>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default EmptyMessage;
