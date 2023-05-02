import { useState } from 'react';
import { SwitchContainer } from './Controls.styled';

const ThemeSwitch = ({ toggleSwitch }) => {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled);
        toggleSwitch();
    };

    return (
        <SwitchContainer>
            <label className='toggle-switch'>
                <input
                    type='checkbox'
                    checked={isToggled}
                    onChange={onToggle}
                />
                <span className='switch' />
            </label>
        </SwitchContainer>
    );
};

export default ThemeSwitch;
