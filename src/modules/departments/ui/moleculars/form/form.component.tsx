import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form as UIForm, Input } from 'antd';
import { FormProps } from './form.props';

/**
 * <Form />
 */
const Form: FC<FormProps> = observer(({ isEdit, initialValues, onSubmit }) => {
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
            {isEdit ? `Изменить ${initialValues.name}` : 'Создать отделения'}{' '}
          </p>

          <Button type='primary' htmlType='submit'>
            {isEdit ? 'Сохранить' : 'Создать'}
          </Button>
        </div>

        {isEdit && (
          <div className='row row_equal'>
            <p className='row_title'>ИД:</p>
            <UIForm.Item
              className='row_equalt_input'
              name='id'
              validateTrigger='onBlur'
            >
              <Input disabled />
            </UIForm.Item>
          </div>
        )}

        <div className='row'>
          <p className='row_title'>
            <span>*</span> Названия отделения:
          </p>

          <UIForm.Item
            className='row_input'
            name='name'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='название' />
          </UIForm.Item>
        </div>
      </UIForm>
    </div>
  );
});

export { Form };
