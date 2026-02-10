import * as Lucide from 'lucide-react'

const CheckboxCrâne = ({ isChecked, onChange }) => {
    return (
        <div onClick={onChange} style={{ cursor: 'pointer', display: 'inline-block', margin: 'auto' }}>
            {isChecked ? (
                <Lucide.Skull size={24} color="black" fill="var(--main-color)" />
            ) : (
                <Lucide.Skull size={24} color="#333" fill="transparent" />
            )}
        </div>
    );
};

export default CheckboxCrâne;