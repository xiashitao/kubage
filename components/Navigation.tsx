import React from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import { GlobalContext } from '@/pages/_app';
import styles from '@/styles/navigation.module.scss';

interface NavItem {
  name: string;
  Icon: any;
  path?: string;
  children?: NavItem[];
}

interface NavProps {
  navItems: NavItem[];
  defaultSelectedName: string;
}

const NavItem = ({
  name,
  Icon,
  path,
  children,
  selectedName,
  select
}: {
  name: string;
  Icon: any;
  path?: string;
  children?: NavItem[];
  selectedName: string;
  select: (name: string, path?: string) => void;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = () => {
    select(name, path);
  };

  if (!children) {
    return (
      <ListItemButton selected={selectedName === name} onClick={handleSelect}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    );
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map(child => (
            <NavItem
              name={child.name}
              Icon={child.Icon}
              key={child.name}
              path={child.path}
              selectedName={selectedName}
              select={select}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const Navigation = (props: NavProps) => {
  const { navItems, defaultSelectedName } = props;
  const theme = useTheme();
  const { showNavigation } = React.useContext(GlobalContext);
  const [selectedName, setSelectedName] = React.useState(defaultSelectedName);
  const router = useRouter();

  const select = (name: string, path?: string) => {
    setSelectedName(name);
    if (path) {
      router.push(path);
    }
  };

  return (
    <Collapse in={showNavigation} timeout="auto" unmountOnExit>
      <List className={classnames(styles.list, styles[theme.palette.mode])}>
        {navItems.map(item => (
          <NavItem
            name={item.name}
            Icon={item.Icon}
            key={item.name}
            path={item.path}
            children={item.children}
            selectedName={selectedName}
            select={select}
          />
        ))}
      </List>
    </Collapse>
  );
};

export default Navigation;
