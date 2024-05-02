<script lang="ts">
import type { User } from "@repo/schemas/zod";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "$lib/components/ui/table";
import * as m from '$paraglide/messages';
import {Button} from "$lib/components/ui/button";
import {IconEdit} from "@tabler/icons-svelte";
import { route } from "$lib/ROUTES";

export let users: User[] = [];

const HEADERS: {
	[key in keyof (typeof users)[number]]?: string;
} = {
	_id: "Id",
	email: m.email(),
    firstname: m.firstname(),
    lastname: m.lastname(),
    role: m.role(),
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
                <TableHead />
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
                    <TableCell>
                        <Button size="icon" variant="ghost" href={route("/admin/users/[userId]/edit", { userId: user._id })}>
                            <IconEdit />
                        </Button>
                    </TableCell>
                </TableRow>
            {/each}
        </TableBody>
    </Table>
</div>