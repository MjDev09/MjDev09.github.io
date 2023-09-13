import React, { useState } from 'react';
import { Modal, Typography } from 'antd';
import '../styles/Project.scss';

function ModalProject ({ title, cover, description, Technologies, link, problematic, isVisible, onClose, classnameModal="modalParams", classnameImageModal='imageCard', }){
    const [isModalVisible, setIsModalVisible] = useState(isVisible);

    const handleOk = () => {
        setIsModalVisible(false);
        onClose();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        onClose();
    };

    return (
        <Modal  className={classnameModal}  title={title} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <img src={cover} alt={title} className={classnameImageModal}/>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Technologies utilisées</h3>
        <p>{Technologies}</p>
        <h3>Problématiques</h3>
        <p>{problematic}</p>
        <h3>Lien:</h3>
        <p><a href={link}>{link}</a></p>

      </Modal>
    );
};
export default ModalProject;