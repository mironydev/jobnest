import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner color="current" size="xl" />
    </div>
  );
};

export default Loading;
