import './PawsIcons.css';

const PawsIcons = () => {
    const paws = [ 1, 2, 3, 4 ];

    return (      
            paws.map(pawNumber => {
                return (
                    <i className={`fa fa-paw paw${pawNumber} gallery-paws`} key={pawNumber} aria-hidden="true"></i>
                )
            })  
    )
}

export default PawsIcons;

// ADD KEY VALUE TO ICON