import React, {useEffect, useState} from "react";
import mc from "./utils/mc";

const ListBuckets = () => {
    const [buckets, setBuckets] = useState([]);
    const getBuckets = async () => {
        const res = await mc.listBuckets();
        setBuckets(res);
    };

    useEffect(() => {
        getBuckets();
    }, []);

    return (

            <table className="table-auto border-collapse table-fixed w-full text-sm">
                <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Bucket Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    buckets.map((b)=>{
                        return (
                            <tr key={b.name} className= "bg-white dark:bg-slate-800">
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{b.name}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"></td>
                            </tr>
                    )
                })}
                </tbody>
            </table>

    );
};

export default ListBuckets;