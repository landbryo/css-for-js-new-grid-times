import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24}/>
                        </button>
                        <button>
                            <Menu size={24}/>
                        </button>
                    </ActionGroup>
                    <DesktopLogoWrapper>
                        <Logo/>
                    </DesktopLogoWrapper>
                    <SubscribeActionGroup>
                        <SubscribeWrapper>
                            <UserButton>
                                <User size={24}/>
                            </UserButton>
                            <SubscribeButton>Subscribe</SubscribeButton>
                            <LoginLink>Already a subscriber?</LoginLink>
                        </SubscribeWrapper>
                    </SubscribeActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <Logo/>
            </MainHeader>
        </header>
    );
};

const DesktopLogoWrapper = styled.div`
  display: none;
  justify-self: center;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const LoginLink = styled.a`
  display: none;
  font-style: italic;
  margin-top: 8px;
  text-align: center;
  text-decoration: underline;
  width: 100%;

  @media ${QUERIES.laptopAndUp} {
    display: block;
    position: absolute;
  }
`;

const UserButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SubscribeButton = styled(Button)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: none;
    color: var(--color-gray-900);
    padding-bottom: 72px;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */

  svg {
    display: block;
  }
`;

const SubscribeActionGroup = styled(ActionGroup)`
  align-items: end;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const SubscribeWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top:48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

export default Header;
