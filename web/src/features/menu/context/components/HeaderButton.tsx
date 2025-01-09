import { Button, createStyles } from '@mantine/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LibIcon from '../../../../components/LibIcon';

interface Props {
  icon: IconProp;
  canClose?: boolean;
  iconSize: number;
  handleClick: () => void;
}

const useStyles = createStyles((theme, params: { canClose?: boolean }) => ({
  button: {
    borderRadius: "3px",
    flex: '1 15%',
    alignSelf: 'stretch',
    height: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor:'linear-gradient(" #171717CC" 80%, " #171717CC" 0%);',
    opacity: 0.95,
    padding: 2,
    '&:hover': {
      backgroundColor: ' #95EF77',
      transform: "scale(0.9)",
      transition: 'background-color 0.5s ease',
    },
  },
  root: {
    border: 'none',
  },
  label: {
    color: params.canClose === false ? ' #171717CC' : 'rgb(255, 255, 255)',
  },
}));

const HeaderButton: React.FC<Props> = ({ icon, canClose, iconSize, handleClick }) => {
  const { classes } = useStyles({ canClose });

  return (
    <Button
      variant="default"
      className={classes.button}
      classNames={{ label: classes.label, root: classes.root }}
      disabled={canClose === false}
      onClick={handleClick}
    >
      <LibIcon icon={icon} fontSize={iconSize} fixedWidth />
    </Button>
  );
};

export default HeaderButton;
