<script lang="ts">
    import type {User} from "@repo/schemas/zod";
    import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from '$lib/components/ui/table';

    interface Props {
        users: User[];
    }

    const { users }: Props = $props();

    const HEADERS: {
        [key in keyof (typeof users)[number]]?: string;
    } = {
        _id: "id",
        email: 'email',
    } as const;
</script>

<div class="rounded-xl border overflow-hidden">
    <Table>
        <TableHeader class="bg-card">
            <TableRow>
                {#each Object.values(HEADERS) as value}
                    <TableHead>
                        {value}
                    </TableHead>
                {/each}
            </TableRow>
        </TableHeader>
        <TableBody>
            {#each users as user}
                <TableRow>
                    {#each Object.keys(HEADERS) as key}
                        <TableCell>
                            {user[key]}
                        </TableCell>
                    {/each}
                </TableRow>
            {/each}
        </TableBody>
    </Table>
</div>