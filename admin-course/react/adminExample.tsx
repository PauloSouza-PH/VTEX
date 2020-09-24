import React, { FC } from 'react';
import { Layout, PageBlock } from 'vtex.styleguide';
import { useQuery } from 'react-apollo';
import  helloworld from '../react/graphql/helloworld.gql';

const AdminExample: FC = () =>{
    const { data } = useQuery(helloworld);

    return (

        <Layout>
            <PageBlock variation="full"
                title="Titulo"
                subtitle="Alguma explicação.">

                <h1>Hello, World!</h1>
                <p>{data?.helloworld}</p>
            </PageBlock>
        </Layout>

    )
}

export default AdminExample;