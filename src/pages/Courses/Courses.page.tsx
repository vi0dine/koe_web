import React, { useState } from 'react';
import './Courses.styles.scss';
import CourseCard from './components/CourseCard/CourseCard.component';
import Pagination from '../../shared/components/Pagination/Pagination.component';

const CoursesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const mockCourses = [
        {
            id: 1,
            imageUri: '',
            title: 'Anatomia 1',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 2,
            imageUri: '',
            title: 'Biochemia 1',
            category: 'Obowiązkowe',
            coordinator: {
                id: 1,
                name: 'Dariusz Ziaja',
            },
        },
        {
            id: 3,
            imageUri:
                'https://images.pexels.com/photos/355000/pexels-photo-355000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Biochemia 2',
            category: 'Obowiązkowe',
            coordinator: {
                id: 1,
                name: 'Dariusz Ziaja',
            },
        },
        {
            id: 4,
            imageUri: '',
            title: 'Anatomia 2',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 5,
            imageUri: '',
            title: 'Anatomia 3',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 24,
            imageUri:
                'https://images.pexels.com/photos/710744/pexels-photo-710744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Anatomia 4',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 6,
            imageUri: '',
            title: 'Anatomia 1',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 7,
            imageUri: '',
            title: 'Biochemia 1',
            category: 'Obowiązkowe',
            coordinator: {
                id: 1,
                name: 'Dariusz Ziaja',
            },
        },
        {
            id: 8,
            imageUri:
                'https://images.pexels.com/photos/355000/pexels-photo-355000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Biochemia 2',
            category: 'Obowiązkowe',
            coordinator: {
                id: 1,
                name: 'Dariusz Ziaja',
            },
        },
        {
            id: 9,
            imageUri: '',
            title: 'Anatomia 2',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 10,
            imageUri: '',
            title: 'Anatomia 3',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 11,
            imageUri:
                'https://images.pexels.com/photos/710744/pexels-photo-710744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Anatomia 4',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 12,
            imageUri: '',
            title: 'Anatomia 1',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
        {
            id: 13,
            imageUri: '',
            title: 'Biochemia 1',
            category: 'Obowiązkowe',
            coordinator: {
                id: 1,
                name: 'Dariusz Ziaja',
            },
        },
        {
            id: 14,
            imageUri:
                'https://images.pexels.com/photos/355000/pexels-photo-355000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Biochemia 2',
            category: 'Obowiązkowe',
            coordinator: {
                id: 1,
                name: 'Dariusz Ziaja',
            },
        },
        {
            id: 15,
            imageUri: '',
            title: 'Anatomia 2',
            category: 'Obowiązkowe',
            coordinator: {
                id: 2,
                name: 'Joanna Czaja',
            },
        },
    ];

    return (
        <div className={'Courses__container'}>
            <span className={'Courses__title'}>Available courses</span>
            <div className={'Courses__courses'}>
                {mockCourses.map((course) => {
                    return (
                        <CourseCard
                            key={course.id}
                            id={course.id}
                            imageUri={course.imageUri}
                            title={course.title}
                            category={course.category}
                            coordinator={course.coordinator}
                        />
                    );
                })}
            </div>
            <div>
                <Pagination
                    currentPage={currentPage}
                    totalEntries={mockCourses.length}
                    perPage={15}
                    onChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default CoursesPage;
