import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Checkbox, Form as UIForm, Input, Select } from 'antd';
import { FormProps } from './form.props';
import styles from './form.module.scss';
import classNames from 'classnames';

/**
 * <Form />
 */
const Form: FC<FormProps> = observer(({ isEdit, initialValues, onSubmit }) => {
  const [form] = UIForm.useForm();

  return (
    <div className={styles.container}>
      <UIForm
        initialValues={initialValues}
        form={form}
        layout='vertical'
        onFinish={onSubmit}
        validateMessages={{
          required: 'Обязательное поле'
        }}
      >
        <div className={styles.header}>
          <p>
            {isEdit
              ? `Update ${initialValues.firstName} ${initialValues.lastName}`
              : 'Create Doctor'}
          </p>

          <Button type='primary' htmlType='submit'>
            {isEdit ? 'Update' : 'Create'}
          </Button>
        </div>

        <div className={styles.row}>
          <p className={styles.row_title}>
            <span>*</span> Firstname:
          </p>

          <UIForm.Item
            className={styles.row_input}
            name='firstName'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='имя' />
          </UIForm.Item>
        </div>

        <div className={styles.row}>
          <p className={styles.row_title}>
            <span>*</span> Lastname:
          </p>
          <UIForm.Item
            className={styles.row_input}
            name='lastName'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='фамилия' />
          </UIForm.Item>
        </div>

        <div className={styles.row}>
          <p className={styles.row_title}>
            <span>*</span> Surname:
          </p>

          <UIForm.Item
            className={styles.row_input}
            name='surname'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='отчество' />
          </UIForm.Item>
        </div>

        <div className={styles.row}>
          <p className={styles.row_title}>
            <span>*</span> Department:
          </p>

          <UIForm.Item
            className={styles.row_input}
            name='department'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Select placeholder='департамент' options={[]} />
          </UIForm.Item>
        </div>

        <div className={classNames(styles.row, styles.row_equal)}>
          <p className={styles.row_title}>Is head of department:</p>

          <UIForm.Item
            className={styles.row_equal_input}
            name='isHeadOfDepartment'
            valuePropName='checked'
          >
            <Checkbox />
          </UIForm.Item>
        </div>
      </UIForm>
    </div>
  );
});

export { Form };
