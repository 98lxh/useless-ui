import { computed, defineComponent, reactive } from "vue";
import { buildPages } from "./utils/build-pages";
import Icon from "@useless-ui/icon"

const paginactionProps = {
    total: {
        type: Number,
        default: 1
    },
    pageCount: {
        type: Number,
        default: 7
    },
    currentPage: {
        type: Number,
        default: 1
    },
    background: {
        type: Boolean,
        default: false
    }
}

const Pagination = defineComponent({
    name: 'UsePagination',
    props: paginactionProps,
    emits: ["update:currentPage", "change"],
    setup(props, { emit }) {
        const showMore = reactive({
            prev: false,
            next: false
        })

        const pages = computed(() => {
            const { total, pageCount, currentPage } = props;
            const middle = Math.floor(pageCount / 2)

            if (total > pageCount) {
                showMore.prev = currentPage > middle + 1
                showMore.next = currentPage < total - middle
            }
            return buildPages(props, showMore.prev, showMore.next)
        })

        function handleSelect(current: number) {
            const { total, currentPage } = props;
            //处理越界
            if (current < 1) current = 1
            if (current > total) current = total

            //更新
            if (current !== currentPage) {
                emit('update:currentPage', current)
                emit("change", current)
            }
        }

        function classes(page: number) {
            const { currentPage, background } = props;
            return ({
                'u-pagination__item': true,
                'is-active': page === currentPage,
                'is-director': page === -1,
                'is-background': background
            })
        }

        function renderPages(): Array<JSX.Element> {
            return (
                pages.value.map(page => (
                    <li
                        class={classes(page)}
                        onClick={() => handleSelect(page)}
                        key={page}
                    >
                        <span>{page}</span>
                    </li>
                ))
            )
        }

        return () => (
            <ul class="u-pagination">
                <li
                    class={classes(-2)}
                    onClick={() => handleSelect(props.currentPage - 1)}
                >
                    <Icon name="arrow-left" />
                </li>
                <li
                    onClick={() => handleSelect(1)}
                    class={classes(1)}
                >
                    <span>1</span>
                </li>
                {showMore.prev && (
                    <li
                        onClick={() => handleSelect(props.currentPage - 5)}
                        class={classes(-1)}
                    >
                        <Icon name="arrow-double-left" />
                        <span>...</span>
                    </li>)}

                {renderPages()}

                {showMore.next && (
                    <li
                        onClick={() => handleSelect(props.currentPage + 5)}
                        class={classes(-1)}
                    >
                        <Icon name="arrow-double-right" />
                        <span>...</span>
                    </li>
                )}

                <li
                    class={classes(props.total)}
                    onClick={() => handleSelect(props.total)}
                >
                    <span>{props.total}</span>
                </li>

                <li
                    class={classes(-2)}
                    onClick={() => handleSelect(props.currentPage + 1)}
                >
                    <Icon name="arrow-right" />
                </li>
            </ul>
        )
    }
})

export default Pagination
