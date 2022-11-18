import { DropLeft, DropRight } from '../../icons';
import PaginationStyles from './styles';
import type { PaginationProps } from './types';
import { usePagination, DOTS } from './usePagination';

const Pagination: React.FC<PaginationProps> = ({
    onPage,
    pageSize,
    className,
    totalCount,
    currentPage,
    siblingCount = 1,
}) => {
    const paginationRange = usePagination({
        pageSize,
        totalCount,
        currentPage,
        siblingCount,
    });

    if (paginationRange.length <= 1) return null;

    const onNext = (): void => onPage(prev => prev + 1);

    const onPrevious = (): void => onPage(prev => prev - 1);

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <PaginationStyles.List className={`paginate ${className ?? ''}`}>
            <PaginationStyles.Bullet
                onClick={onPrevious}
                disabled={currentPage === 1}
            >
                <DropLeft />
            </PaginationStyles.Bullet>

            {paginationRange.map(pageNumber => (
                <PaginationStyles.Bullet
                    key={pageNumber === DOTS ? Math.random() : pageNumber}
                    selected={pageNumber === currentPage}
                    onClick={() => pageNumber !== DOTS && onPage(pageNumber as number)}
                >
                    {pageNumber === DOTS ? DOTS : pageNumber}
                </PaginationStyles.Bullet>
            ))}

            <PaginationStyles.Bullet
                onClick={onNext}
                disabled={currentPage === lastPage}
            >
                <DropRight />
            </PaginationStyles.Bullet>
        </PaginationStyles.List>
    );
};

export {
    Pagination,
    PaginationStyles,
    type PaginationProps,
};
