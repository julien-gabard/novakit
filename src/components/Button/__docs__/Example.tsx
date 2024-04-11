import { FC } from 'react'

import Button from '../Button'
import { ButtonProps } from '../Button'

const Example: FC<ButtonProps> = ({ onClick, text }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}
    >
        <Button text={text} onClick={onClick} />
    </div>
)

Example.defaultProps = {
    onClick: () => {},
    text: 'Button',
}

export default Example
