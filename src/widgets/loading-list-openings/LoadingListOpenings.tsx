import { FC } from "react";
import { LoadingCard } from "../../shared/ui";

const LoadingListOpenings: FC = () => {
    return (
        <div className={"sm:grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-3"}>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
        </div>
    )
}

export default LoadingListOpenings