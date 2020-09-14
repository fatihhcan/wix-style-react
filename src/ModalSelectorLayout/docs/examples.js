import React from 'react';
import times from '../../utils/operators/times';

export const ITEMS = times(50, i => ({
  id: i,
  title: `Title ${i}`,
  subtitle: `Subtitle ${i}`,
  extraText: `Extra Text ${i}`,
  disabled: !(i % 2),
  image: (
    <img width="100%" height="100%" src="http://via.placeholder.com/100x100" />
  ),
}));

export const DATA_SOURCE = (searchQuery, offset, limit) =>
  new Promise(resolve =>
    setTimeout(() => {
      const filtered = ITEMS.filter(({ title }) =>
        title.toLowerCase().startsWith(searchQuery.toLowerCase()),
      );

      resolve({
        items: filtered.slice(offset, offset + limit),
        totalCount: filtered.length,
      });
    }, 2000),
  );

export const type = `
    <Layout>
      <Cell>
        <ModalSelectorLayout
          height="540px"
          itemsPerPage={4}
          onCancel={() => "canceled"}
          onOk={function onOk(data){var isArray=Array.isArray(data),view=function view(i){return{id:i.id,title:i.title,subtitle:i.substitle}};return JSON.stringify(isArray?data.map(view):view(data))}}
          searchDebounceMs={150}
          dataSource={${DATA_SOURCE}}
        />
      </Cell>
      <Cell>
        <ModalSelectorLayout
          multiple
          height="540px"
          itemsPerPage={4}
          onCancel={() => "canceled"}
          onOk={function onOk(data){var isArray=Array.isArray(data),view=function view(i){return{id:i.id,title:i.title,subtitle:i.substitle}};return JSON.stringify(isArray?data.map(view):view(data))}}
          searchDebounceMs={150}
          dataSource={${DATA_SOURCE}}
        />
      </Cell>
    </Layout>
`;
