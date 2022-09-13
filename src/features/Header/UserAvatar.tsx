import { UserAvatarWrapper } from './styled'


interface I_DropdownPanelProps {
  onClick: () => void
}

const UserAvatar: React.FC<I_DropdownPanelProps> = (props) => (
  <UserAvatarWrapper onClick={props.onClick}>
    <img src='https://i.pravatar.cc/46' alt='User avatar' />
  </UserAvatarWrapper>
)

export default UserAvatar
