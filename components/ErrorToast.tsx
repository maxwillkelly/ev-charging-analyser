import React, { useEffect, useState } from "react";
import Toast from "react-native-root-toast";

type Props = {
  message: string;
};

const ErrorToast: React.FC<Props> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 15000);
  }, []);

  return (
    <Toast
      visible={visible}
      shadow={false}
      animation={false}
      hideOnPress={false}
    >
      {message}
    </Toast>
  );
};

export default ErrorToast;
