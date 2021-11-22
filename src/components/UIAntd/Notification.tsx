import { Button, notification, Space } from "antd";
import { RadiusBottomrightOutlined } from "@ant-design/icons";

export const Notification = (placement: any) => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    placement,
  });

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => Notification("bottomRight")}>
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </Space>
    </div>
  );
};
