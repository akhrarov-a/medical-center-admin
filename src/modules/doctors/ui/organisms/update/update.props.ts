// import { useStore } from '@/app.context';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

/**
 * <UpdateDoctorForm /> props
 */
const useUpdateDoctorFormProps = () => {
  // const router = useRouter();
  // const { suppliers: store, products } = useStore();
  //
  // useEffect(() => {
  //   store.getLocations();
  //   store.getCities();
  //   store.getPayments();
  //   store.getShippings();
  //   products.getCategoryTree();
  //
  //   return () => {
  //     store.clearInitialValues();
  //   };
  // }, []);
  //
  // useEffect(() => {
  //   if (!router.query.id) return;
  //
  //   store.getSupplierById(router.query.id as string);
  // }, [router.query.id]);

  return {
    // initialValues: store.initialValues,
    // onSubmit: store.updateSupplier
  };
};

export { useUpdateDoctorFormProps };
