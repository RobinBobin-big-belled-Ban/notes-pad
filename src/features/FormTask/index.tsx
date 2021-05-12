import React, { FC } from 'react';
import { useFormik } from 'formik';
import Input from '../../components/Input'
import * as yup from 'yup'
import classNames from 'classnames'
import classes from './styles.module.scss'
import Button from '../../components/Button'

const styles = {
    color: 'tomato',
    fontSize: '12px',
}

interface Props {
    changeDbFunction: Function;
    title: string;
    inform: string;
    head: string;
}

export const FormTask: FC<Props> = ({ changeDbFunction, title, head, inform }) => {
    const validSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        description: yup.string().required('Description is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: head,
            description: inform,
        },
        validateOnBlur: true,
        validationSchema: validSchema,
        onSubmit: values => {
            changeDbFunction(values)
        },
    });

    const nameCx = classNames({
        'input-error': formik.errors.name && formik.touched.name,
        '': !formik.errors.name || !formik.touched.name,
    })
    const descCx = classNames({
        'input-error': formik.errors.description && formik.touched.description,
        '': !formik.errors.description || !formik.touched.description,
    })

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <h3 className={classes['form-header']}>{title}</h3>
            <label htmlFor="name">Title
                <Input
                    className={classes[nameCx]}
                    id="name"
                    placeholder="Type name"
                    {...formik.getFieldProps('name')}
                />
            </label>
            {(formik.touched.name && formik.errors.name)
                && <div style={styles}>{formik.errors.name}</div>}
            <label htmlFor="desc">Description
                <Input.TextArea
                    className={classes[descCx]}
                    id="desc"
                    placeholder="Type description"
                    {...formik.getFieldProps('description')}
                    autoSize={{ minRows: 10 }}
                />
            </label>
            {(formik.touched.description && formik.errors.description)
                && <div style={styles}>{formik.errors.description}</div>}
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button
                type="default"
                onClick={() => formik.resetForm()}
            >
                Clear
            </Button>
        </form>
    );
};