import React from 'react';
import { FaUser } from 'react-icons/fa';

import Head from 'next/head';
import {
  Header,
  Section,
  AccountContainer,
  ProfilePicture,
  ItemsContainer,
  Item,
  CardsContainer,
  Card,
  CardHeader,
  InputContainer,
  CardFooter,
} from 'styles/profile';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Felipe Gouvea - Pandur</title>
      </Head>

      <Header>Profile settings</Header>

      <Section>
        <AccountContainer>
          <ProfilePicture className="vh_center">
            <FaUser />
          </ProfilePicture>

          <ItemsContainer>
            <Item className="active">Account</Item>
            <Item>Post settings</Item>
          </ItemsContainer>
        </AccountContainer>

        <CardsContainer>
          <Card>
            <CardHeader>
              <h3>Account name</h3>
              <span>Don{"'"}t like your username anymore? Change it.</span>
            </CardHeader>

            <InputContainer>
              <div>https://pandur.com/</div>
              <input type="text" placeholder="Your new username" />
            </InputContainer>

            <CardFooter>
              <button type="button">Save</button>
            </CardFooter>
          </Card>
        </CardsContainer>
      </Section>
    </>
  );
}
