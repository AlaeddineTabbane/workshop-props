import React from 'react'
import PropTypes from "prop-types";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Index(props) {
  const { item, name } = props
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={props.item.img}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={item.avatar} />}
        title={name}
        description={item.description}
      />
    </Card>
  )
}

Index.defaultProps = {
  name: "sami"
};

Index.propTypes = {
  item: PropTypes.object,
  name: PropTypes.number
}

export default Index
