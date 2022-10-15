import React from 'react';
import addImg from '../../../images/adds.gif';
import { linksCategory } from '../../../temp/data';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import './Adds.css';
import { useNavigate } from 'react-router-dom';

const Adds = () => {
    const navigate = useNavigate();

    const handleCategory = category => {
        console.log(category);
        navigate(`/products/${category}`);
    };
    
    return (
        <div className="adds-container">
            <div className="adds-wrapper d-flex items-center justify-center">
                <img src={addImg} alt="" />
            </div>

            <div className="links-categorys">
                {
                    linksCategory.map(category => <div key={category.id} className="link-category d-flex items-center"
                    onClick={() => handleCategory(category?.title.toLowerCase())}
                    >
                        <div className="d-flex items-center">
                            <img src={require(`../../../images/links-category/${category.img}`)} alt="" />
                            <span className="link-category-title">{category.title}</span>
                        </div>
                        <span className="arrow-icon"><MdOutlineArrowForwardIos /></span>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Adds;