import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const HeaderBar = styled.div`
  background-color: #3f51b5;
  color: white;
  padding: 10px;
  font-size: 24px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RecipeCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;

export const SearchContainer = styled.div`
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #3f51b5;
  color: white;
  border: none;
  cursor: pointer;
`;
