import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                {/* <EditButton outlined>
                    Editar Perfil
                </EditButton> */}

                <h1>Denilson Pereira</h1>
                <h2>@dpereira</h2>

                <p>
                    Full stack developer
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 27 de dezembro de 1998
                    </li>
                </ul>

                <Followage>
                    <span> Seguindo <strong>648</strong></span>
                    <span> <strong>345</strong> seguidores </span>
                </Followage>
            </ProfileData>
        </Container>
    );
}

export default ProfilePage;