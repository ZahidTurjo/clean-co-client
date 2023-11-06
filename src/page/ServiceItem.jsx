/* eslint-disable react/prop-types */


const ServiceItem = ({item}) => {
    const {name,price,description}=item
    return (
        <div>
            <li>{name}</li>
            <li>Price:{price} $</li>
            <h2>{description}</h2>
        </div>
    );
};

export default ServiceItem;