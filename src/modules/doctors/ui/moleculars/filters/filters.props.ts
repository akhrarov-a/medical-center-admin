/**
 * <DoctorsTableFilters /> props
 */
const useDoctorsTableFilters = () => {
  // const router = useRouter();

  // const {
  //   suppliers: { tableFilters, setTableFilters, getData }
  // } = useStore();

  // const onFilterChange = (key: keyof typeof tableFilters, value: any) => {
  //   setTableFilters({ [key]: value });
  //
  //   const keys: any[] = Object.keys(tableFilters).filter(k => key !== k);
  //
  //   if (
  //     !!value ||
  //     keys.some(key => !!tableFilters[key as keyof typeof tableFilters])
  //   )
  //     return;
  //
  //   onSearch();
  // };

  // const onSearch = () => {
  //   const query = router.query as any;
  //
  //   getData(query.page, query.perPage, {
  //     order: query.sortOrder,
  //     field: query.sortKey
  //   });
  // };

  return {
    // tableFilters,
    // onFilterChange,
    // onSearch
  };
};

export { useDoctorsTableFilters };
