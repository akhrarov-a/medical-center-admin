import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form as UIForm, Input, Select } from 'antd';
import { useStore } from '@store';
import { FormProps } from './form.props';

/**
 * <Form />
 */
const Form: FC<FormProps> = observer(({ isEdit, initialValues, onSubmit }) => {
  const { nurses: store } = useStore();

  const [form] = UIForm.useForm();

  return (
    <div className='form-container'>
      <UIForm
        initialValues={initialValues}
        form={form}
        layout='vertical'
        onFinish={onSubmit}
        validateMessages={{
          required: 'Обязательное поле'
        }}
      >
        <div className='header'>
          <p>
            {isEdit
              ? `Изменить ${initialValues.firstName} ${initialValues.lastName}`
              : 'Создать медсестру'}
          </p>

          <Button type='primary' htmlType='submit'>
            {isEdit ? 'Сохранить' : 'Создать'}
          </Button>
        </div>

        <div className='row'>
          <p className='row_title'>
            <span>*</span> Имя:
          </p>

          <UIForm.Item
            className='row_input'
            name='firstName'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='имя' />
          </UIForm.Item>
        </div>

        <div className='row'>
          <p className='row_title'>
            <span>*</span> Фамилия:
          </p>
          <UIForm.Item
            className='row_input'
            name='lastName'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='фамилия' />
          </UIForm.Item>
        </div>

        <div className='row'>
          <p className='row_title'>
            <span>*</span> Отчество:
          </p>

          <UIForm.Item
            className='row_input'
            name='surname'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='отчество' />
          </UIForm.Item>
        </div>

        <div className='row'>
          <p className='row_title'>
            <span>*</span> Отделения:
          </p>

          <UIForm.Item
            className='row_input'
            name='department'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Select placeholder='департамент' options={store.departments} />
          </UIForm.Item>
        </div>
      </UIForm>
    </div>
  );
});

export { Form };
