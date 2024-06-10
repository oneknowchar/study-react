import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  //page=1&size=10
  // const page = 1;
  // const size = 10;
  // const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = () => {
    let queryStr = '';

    const pageNum = getNum(queryParams.get('page'), 1);
    const sizeNum = getNum(queryParams.get('size'), 10);

    queryStr = createSearchParams({
      page: pageNum,
      size: sizeNum,
    }).toString();

    navigate({ pathname: '../list', search: queryStr });
  };

  return { moveToList };
};

export default useCustomMove;
